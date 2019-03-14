using System.Linq;
using System.Threading;
using System.Threading.Tasks;
using GameLibrary.API.Models;
using Microsoft.EntityFrameworkCore;

namespace GameLibrary.API.Data {
    public class AuthRepository : IAuthRepository {
        private readonly DataContext _context;

        public AuthRepository (DataContext context) {
            _context = context;
        }
        public async Task<User> Register (User user, string password) {
            // declair variables to salt and hash password
            byte[] passwordHash, passwordSalt;
            CreatePasswordHash (password, out passwordHash, out passwordSalt);
            user.PasswordHash = passwordHash;
            user.PasswordSalt = passwordSalt;

            await _context.Users.AddAsync (user);
            await _context.SaveChangesAsync ();

            return user;
        }

        private void CreatePasswordHash (string password, out byte[] passwordHash, out byte[] passwordSalt) {
            using (var hmac = new System.Security.Cryptography.HMACSHA512 ()) {
                passwordSalt = hmac.Key;
                passwordHash = hmac.ComputeHash (System.Text.Encoding.UTF8.GetBytes (password));
            }
        }

        public async Task<User> Login (string username, string password) {
            var user = await _context.Users.FirstOrDefaultAsync (x => x.Username == username);
            if (user == null) {
                return null;
            }

            return (!VerifyPasswordHash (password, user.PasswordHash, user.PasswordSalt)) ? null : user;

        }

        private bool VerifyPasswordHash (string password, byte[] userPasswordHash, byte[] userPasswordSalt) {
            using (var hmac = new System.Security.Cryptography.HMACSHA512 (userPasswordSalt)) {
                var computedHash = userPasswordHash = hmac.ComputeHash (System.Text.Encoding.UTF8.GetBytes (password));
                for (int i = 0; i < computedHash.Length; i++) {
                    if (computedHash[i] != userPasswordHash[i]) {
                        return false;
                    }
                }
            }

            return true;
        }

        public async Task<bool> UserExists (string username) {
            if (await _context.Users.AnyAsync (x => x.Username == username)) {
                return true;
            }

            return false;
        }
    }
}
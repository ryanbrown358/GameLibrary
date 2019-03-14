using System;
using System.ComponentModel.DataAnnotations;

namespace GameLibrary.API.Dtos {
    public class UserForRegisterDto {
        [Required]
        public string Username { get; set; }

        [Required]
        [StringLength (8, MinimumLength = 4, ErrorMessage = "Password is to short, please supply at least 8 characters")]
        public string Password { get; set; }
    }
}
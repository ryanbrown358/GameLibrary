namespace GameLibrary.API.Models
{
    public class Games
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public string Genre { get; set; }
        public double Price { get; set; }
        public string Description { get; set; }
    }
}
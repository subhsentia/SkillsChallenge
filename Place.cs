namespace InterviewTest
{
    public class Place
    {
        public string Name { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string DisplayAddress => City + ", " + State;
    }
}

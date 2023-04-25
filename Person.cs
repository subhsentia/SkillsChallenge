namespace InterviewTest
{
    public class Person
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }

        public string DisplayName => FirstName + ", " + LastName;
        public DateTime Birthday { get; set; }
        public string Hobbies { get; set; }
    }
}

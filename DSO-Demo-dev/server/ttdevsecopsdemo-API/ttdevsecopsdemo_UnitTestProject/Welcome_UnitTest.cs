using Microsoft.VisualStudio.TestTools.UnitTesting;
using ttdevsecopsdemo_API.Controllers;
namespace ttdevsecopsdemo_UnitTestProject
{
    [TestClass]
    public class Welcome_UnitTest
    {
        [TestMethod]
        public void ValidWelcome()
        {
            var welcome = new WelcomeController();
            var result = welcome.GetWelcomeDetails();
            Assert.AreEqual("TechTrend Brings DevSecOps to the Team", "TechTrend Brings DevSecOps to the Team");
            
        }
        [TestMethod]
        public void NotValidWelcome()
        {
            var welcome = new WelcomeController();
            var result = welcome.GetWelcomeDetails();
            Assert.AreNotEqual("TechTrend Brings DevSecOps to the Team", "Welcome");
           
        }
        [TestMethod]
        public void EmptyWelcome()
        {
            var welcome = new WelcomeController();
            var result = welcome.GetWelcomeDetails();
            Assert.AreNotEqual("TechTrend Brings DevSecOps to the Team", "");
            Assert.Fail();
        }
    }
}

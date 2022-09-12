using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;
using ttdevsecopsdemo.Data;
namespace ttdevsecopsdemo.Business.Welcome
{
    public class WelcomeBA
    {
        public async Task<string> GetWelcomeDetails()
        {
            WelcomeData welcomeData = new WelcomeData();
            return await welcomeData.GetWelcomeDetails();
        }
    }
}

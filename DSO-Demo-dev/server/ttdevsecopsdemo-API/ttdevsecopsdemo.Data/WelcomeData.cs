using System;
using System.Linq;
using System.Threading.Tasks;
using ttdevsecopsdemo.Data.Models;
namespace ttdevsecopsdemo.Data
{
    public class WelcomeData
    {
        public async Task<string> GetWelcomeDetails()
        {
            postgresContext _master = new postgresContext();
            var selectedColumn = from m in _master.TblWelcomes
                                 select new
                                 {
                                     m.Name
                                 };
            string results = selectedColumn.Select(item => item.Name).FirstOrDefault().ToString();           
            return await Task.FromResult(results);
        }
    }
}

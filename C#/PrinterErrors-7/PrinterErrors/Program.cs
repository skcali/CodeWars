using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace PrinterErrors
{
    class Program
    {
        static void Main(string[] args)
        {
            string PrinterError(String s)
            {
                string ErrorReport = "";
                char[] Characters = s.ToCharArray();
                int ErrorCounter = 0;

                for (int i = 0; i < Characters.Length; i++)
                {
                    if (Characters[i] >= 'n' )
                    {
                        ErrorCounter++;
                    }
                }

                ErrorReport += ErrorCounter.ToString() + "/" + s.Length.ToString();

                return ErrorReport;
            }
            Console.WriteLine("Testing PrinterError");
            Console.WriteLine(PrinterError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz"));
            Console.WriteLine("3/56");
        }
    }
}

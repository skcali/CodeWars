using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using NUnit.Framework;

namespace GetMiddleChar
{
    class Program
    {
        static void Main(string[] args)
        {

            string GetMiddle(string s)
            {
                char[] characters = s.ToCharArray();
                string finalWord = "";
                int middleChar = characters.Length / 2;
                if (characters.Length % 2 == 0)
                {
                    finalWord = characters[middleChar - 1].ToString();
                    finalWord += characters[middleChar].ToString();
                }
                else
                {
                    finalWord = characters[middleChar].ToString();
                }

                return finalWord;
            }


            Console.WriteLine(GetMiddle("test"));
            Console.WriteLine(GetMiddle("testing"));
            Console.WriteLine(GetMiddle("middle"));
            Console.WriteLine(GetMiddle("A"));
        }
    }
}

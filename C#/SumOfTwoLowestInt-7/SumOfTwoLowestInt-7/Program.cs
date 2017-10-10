using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace SumOfTwoLowestInt_7
{
    class Program
    {
        static void Main(string[] args)
        {
            int sumTwoSmallestNumbers(int[] numbers)
            {
                int[] SortedNumbers = numbers.OrderBy(i => i).ToArray();

                return SortedNumbers[0] + SortedNumbers[1];
            }

            int[] TestNumbers = { 5, 8, 12, 19, 22 };

            Console.WriteLine(sumTwoSmallestNumbers(TestNumbers));
        }
    }
}

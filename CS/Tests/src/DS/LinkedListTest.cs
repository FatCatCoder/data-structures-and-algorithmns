using Microsoft.VisualStudio.TestTools.UnitTesting;
using LLClass = DSA.DataStructures.LinkedList<int>;

namespace Tests.DS;

[TestClass]
public class LinkedListTest
{
    [TestMethod]
    public void Instansiate_New_LinkedList_TypeOf_int()
    {
        // Arrange
       LLClass myLL = new LLClass();

        // Assert
        Assert.IsInstanceOfType(myLL, typeof(LLClass), 
            string.Format("Not of Type LinkedList, IsTypeOf: '{0}'", myLL.GetType())
        );
    }
}
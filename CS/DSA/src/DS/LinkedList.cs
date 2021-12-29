using DSA.Helpers;

namespace DSA.DataStructures;

public class LinkedList<T>
{
    public LinkedListNode<T> Head { get; set; }
    public int Length { get; set; }

    public LinkedList()
    {
        Head = null;
        Length = 0;
    }

    public LinkedListNode<T>[] List()
    {
        LinkedListNode<T> deepNode = Head;
        LinkedListNode<T>[] tempArray = new LinkedListNode<T>[Length];
        int count = 0;

        if(Head == null) return null;

        while(deepNode.Next is not null)
        {
            tempArray[count] = deepNode;
            count++;
            deepNode = deepNode.Next;
        }
        return tempArray;
    }

    public void Add(T data)
    {
        if(Head is null) {Head = new LinkedListNode<T>(data);}
        else
        {
            LinkedListNode<T> deepNode = Head;

            while(deepNode.Next is not null)
            {
                deepNode = deepNode.Next;
            }
            deepNode.Next = new LinkedListNode<T>(data);
            Length++;
        }
    }
    public void Print()
    {
        JSONPrint.Pretty<LinkedListNode<T>>(Head);
    }
}

// Node
public class LinkedListNode<T>
{
    public LinkedListNode(T data)
    {
        Data = data;
        Next = null;
    }

    public T Data { get; set; }
    public LinkedListNode<T> Next { get; set; }
}
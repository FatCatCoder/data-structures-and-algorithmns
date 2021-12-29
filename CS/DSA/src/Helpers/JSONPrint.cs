using System;
using System.Text.Json;
using System.Text.Json.Serialization;

namespace DSA.Helpers;

public static class JSONPrint
{
    public static void Pretty<T>(this T x)
    {
        var options = new JsonSerializerOptions { WriteIndented = true };
        string json = JsonSerializer.Serialize(x, options);
        Console.WriteLine(json);
    }
}

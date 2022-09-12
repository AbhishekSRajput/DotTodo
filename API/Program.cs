

using Microsoft.EntityFrameworkCore;
using Persistence;

namespace API
{
  public class Program
  {
    public static async Task Main(string[] args)
    {
      var host = CreateHostBuilder(args).Build();
      // using keyword(once we are done with the scope its going to be disposed of)
      using var scope = host.Services.CreateScope();
      var services = scope.ServiceProvider;
      try
      {
        var context = services.GetRequiredService<DataContext>();
        await context.Database.MigrateAsync();
        await Seed.SeedData(context);
      }
      catch (System.Exception Ex)
      {
        var logger = services.GetRequiredService<ILogger<Program>>();
        logger.LogError(Ex, "An error has occurred");
      }

      await host.RunAsync();
    }

    public static IHostBuilder CreateHostBuilder(string[] args) =>
        Host.CreateDefaultBuilder(args)
            .ConfigureWebHostDefaults(webBuilder =>
            {
              webBuilder.UseStartup<Startup>();
            });
  }
}

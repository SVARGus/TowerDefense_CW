using Microsoft.AspNetCore.Mvc;
using TowerDefense_CW.Models;

namespace TowerDefense_CW.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View(new LoginViewModel());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Index(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Здесь ваша логика аутентификации
                var result = await AuthenticateUser(model.Email, model.Password, model.RememberMe);

                if (result.Success)
                {
                    if (!string.IsNullOrEmpty(model.ReturnUrl) && Url.IsLocalUrl(model.ReturnUrl))
                    {
                        return Redirect(model.ReturnUrl);
                    }
                    return RedirectToAction("Privacy", "Home");
                }

                ModelState.AddModelError(string.Empty, result.ErrorMessage);
            }

            return View(model);
        }

        public IActionResult Privacy()
        {
            return View();
        }

        [ResponseCache(Duration = 0, Location = ResponseCacheLocation.None, NoStore = true)]
        public IActionResult Error()
        {
            return View(new ErrorViewModel { RequestId = System.Diagnostics.Activity.Current?.Id ?? HttpContext.TraceIdentifier });
        }

        private async Task<(bool Success, string ErrorMessage)> AuthenticateUser(string email, string password, bool rememberMe)
        {
            // Заглушка - замените на вашу логику аутентификации
            await Task.Delay(100);

            if (email == "user@example.com" && password == "password")
            {
                return (true, null);
            }

            return (false, "Неверный email или пароль");
        }
    }
}
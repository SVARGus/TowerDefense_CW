using Microsoft.AspNetCore.Mvc;
using TowerDefense_CW.Models;

namespace TowerDefense_CW.Controllers
{
    public class AccountController : Controller
    {
        [HttpGet]
        public IActionResult Login()
        {
            return View(new LoginViewModel());
        }

        [HttpPost]
        [ValidateAntiForgeryToken]
        public async Task<IActionResult> Login(LoginViewModel model)
        {
            if (ModelState.IsValid)
            {
                // Здесь ваша логика аутентификации
                var result = await AuthenticateUser(model.Email, model.Password, model.RememberMe);

                if (result.Success)
                {
                    // После успешной авторизации перенаправляем на главную страницу
                    return RedirectToAction("Index", "Home");
                }

                ModelState.AddModelError(string.Empty, result.ErrorMessage);
            }

            return View(model);
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
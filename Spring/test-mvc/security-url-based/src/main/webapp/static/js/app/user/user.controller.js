TodoApp.Controllers.UserController = {
    login: function() {
        window.log("Rendering login page");
        var loginView = new TodoApp.Views.LoginView();
        TodoApp.mainRegion.show(loginView);
    }
};
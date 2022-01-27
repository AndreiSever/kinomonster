<?php
    require_once $_SERVER["DOCUMENT_ROOT"]."/parts/header.php";
?>
    <main>
        <section class="login">
            <div class="form-container">
                <p>Register</p>
                <form action="">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="">
                    <label for="repeat_password">RepeatPassword</label>
                    <input type="password" name="repeat_password" id="">
                    <input type="submit" value="Register">
                </form>
                <p>or <span>Log in</span></p>
            </div>
        </section>
    </main>
<?php
    require_once $_SERVER["DOCUMENT_ROOT"]."/parts/footer.php";
?>
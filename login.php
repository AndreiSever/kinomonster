<?php
    require_once $_SERVER["DOCUMENT_ROOT"]."/parts/header.php";
?>
    <main>
        <section class="login">
            <div class="form-container">
                <p>Log In</p>
                <form action="">
                    <label for="email">Email</label>
                    <input type="text" name="email" id="">
                    <label for="password">Password</label>
                    <input type="password" name="password" id="">
                    <input type="submit" value="Log In">
                </form>
                <p>or <span>Password</span></p>
            </div>
            <p>No account? <span>Create one</span></p>
        </section>
    </main>
<?php
    require_once $_SERVER["DOCUMENT_ROOT"]."/parts/footer.php";
?>
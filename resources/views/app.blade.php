<!DOCTYPE html>
<html>

<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>To do App</title>
    <link href="{{ asset('css/app.css') }}" rel="stylesheet" />
</head>

<body>
    <div class="container py-5">
        <div id="index"></div>
    </div>
    <script src="{{ asset('js/app.js') }}"></script>

    <div class="text-center">
        <a class="navbar-brand" href="{{ url('/login') }}">
            ログインはこちら
        </a>
    </div>
</body>

</html>
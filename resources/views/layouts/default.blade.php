<!DOCTYPE html>
<html lang="en">
<head>
    @include('includes.head')
    @yield('head')
</head>
<body>
    <!-- Nav Bar -->
    @include('includes.header')

    <!-- Page Content -->
	@yield('content')


	<!-- Scripts -->

	<!-- Main Script -->
	<script src="/js/app.js"></script>

</body>
</html>

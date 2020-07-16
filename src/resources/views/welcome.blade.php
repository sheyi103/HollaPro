<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        {{-- <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"> --}}

        <title>HollaPro</title>

        <!-- Fonts -->
        <link rel="stylesheet" type="text/css" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css">

        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js"></script>
      
        <script type="text/javascript" src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/js/bootstrap.min.js"></script>
      
        <script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-show-password/1.0.3/bootstrap-show-password.min.js"></script>
       <script src="https://unpkg.com/bootstrap-show-password@1.2.1/dist/bootstrap-show-password.min.js"></script>

        <link rel="stylesheet" href="path/to/font-awesome/css/font-awesome.min.css">
        <link href="https://fonts.googleapis.com/css?family=Lato:200,500,300,400,600" rel="stylesheet">
        <link href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css" rel="stylesheet" integrity="sha384-wvfXpqpZZVQGK6TAh5PVlGOfQNHSoD2xbE+QkPxCAFlNEevoEH3Sl0sibVcOQVnN" crossorigin="anonymous">
        <link rel="stylesheet" href="{{ asset('css/app.css') }}">
        <script src="{{ asset('js/app.js') }}" defer></script>
       
    </head>
    <style>
  /* Sticky footer styles
-------------------------------------------------- */
@import url('https://fonts.googleapis.com/css2?family=Hind:wght@300;400;500;600&display=swap');
html {
  background-color: #E5E5E5;
  color: #666666;
  font-family: 'Hind', sans-serif;
  /* font-size: 20px; */
  /* font-weight: 500; */
  text-rendering: optimizeLegibility;
  position: relative; 
   min-height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.paragraph-heading{
    max-width: 1140px !important;
    margin: 40px auto !important;
}
.clearfix:after{
    content: "";
    display: table;
    clear: both;
}

/* .container{
    margin: 0 10%;
} */
.bd-placeholder-img {
        /* font-size: 1.125rem; */
        text-anchor: middle;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      @media (min-width: 768px) {
        .bd-placeholder-img-lg {
          font-size: 3.5rem;
        }
      }

    </style>
    <body>
       <div id="app">
           <index></index>
       </div>

       <script src="https://unpkg.com/ionicons@5.1.2/dist/ionicons.js"></script>
       <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" crossorigin="anonymous"></script>
       <script>window.jQuery || document.write('<script src="../../assets/js/vendor/jquery-slim.min.js"><\/script>')</script>
       <script src="../../assets/js/vendor/popper.min.js"></script>
       <script src="../../dist/js/bootstrap.min.js"></script>
    </body>
</html>

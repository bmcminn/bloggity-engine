<!DOCTYPE html>
<html lang="{{ site.lang }}">
<head>
  <meta charset="UTF-8">
  <title>{{ page.title }}</title>
  <link rel="stylesheet" type="text/css" href="{% make_url "stylesheet" "/styles/main.css" %}">
</head>
<body>

  {% block page-header %}
    {% include "_header" %}
  {% endblock page-header %}


  {% block page-content %}

  {% endblock page-content %}

  <script type="text/javascript" src="{% make_url "script" "/scripts/main.js" %}"></script>

</body>
</html>

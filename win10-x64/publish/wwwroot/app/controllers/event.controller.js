function eventCtrl($scope, $http, $routeParams, $route, $rootScope) {
  $('.carousel').carousel();// Пашины карусель
  console.log($rootScope.auth);


  $('select').material_select();
  // Витин селект

  $scope.openModalAbout = function ($about, $event) {
    $event.preventDefault();
    console.log($about);
    $scope.aboutEvent = $about;
    $('#about').modal('open');
    $('#error_about').text('');
  }

  console.log($route.current.params.email)
  $scope.openModalEventRegistration = function ($ID, $event) {
    $event.preventDefault();
    $scope.ID = $ID;
    console.log($scope.ID + "///");
    $('#EventRegistration').modal('open');
    $('#error_EventRegistration').text('');
  }


  $('.modal').modal({
    dismissible: true, // Modal can be dismissed by clicking outside of the modal
    opacity: .5, // Opacity of modal background
    in_duration: 300, // Transition in duration
    out_duration: 200, // Transition out duration
    starting_top: '4%', // Starting top style attribute
    ending_top: '10%', // Ending top style attribute
    ready: function (modal, trigger) { // Callback for Modal open. Modal and trigger parameters available.
    },
    complete: function () { }
  });

  $scope.ath = false;

  if (localStorage.getItem('auth') !== null) {
    var data = JSON.parse(localStorage.getItem('auth'));
    $scope.email = data.email;
    $scope.id_user = JSON.parse(localStorage.getItem('auth')).id_User;
    $scope.user_name = JSON.parse(localStorage.getItem('auth')).name;
    $scope.user_surname = JSON.parse(localStorage.getItem('auth')).surname;
    $scope.ath = true;


    console.log("----- " + $scope.email + "++++" + $scope.id_user);
  }
  console.log($scope.ath);
  $scope.preLoader = true;
  $http.get("/api/event").then(function (response) {
    console.log(response.data);
    $scope.events = response.data;

    $scope.preLoader = false;
  })

  $scope.typeEvent = [];
  $scope.currentPage = 0; // счетчик для страниц
  $scope.itemsPerPage = 3;// кол-во отображаемых событий на одной странице



  $scope.modelEvent = {
    title: "",
    about: "",
    date: new Date(),
    location: "",
    type: [],

  }; // массив событий

  $scope.modelParticipant = {
    phonenumber: "",
    interes: "",
    bday: new Date(),
    university: "",
    spec: "",

  }; // массив событий
  $scope.AddParticipant = function ($ID, $event) {
    var obj = $scope.modelParticipant;
    $scope.UserToEvent(obj, $ID, $event);
  }
  //post запрос на добавление участника в ивент
  $scope.UserToEvent = function (obj, ID, $event) {
    // $event.preventDefault();

    console.log(ID + "********");
    var part = {
      Id_Event: ID,
      Id_User: $scope.id_user,
      email_user: $scope.email,
      name: $scope.user_name,
      surname: $scope.user_surname,
      phonenumber: obj.phonenumber,
      interes: obj.interes,
      bday: obj.bday,
      univ: obj.university,
      spec: obj.spec

    };


    $http.post("/api/participant", part).then(function (response) {
      console.log(response);
    })
    swal("Поздравляем!", "Вы добавлены в список участников!", "success")
  };


  //добавление нового события в массив
  $scope.addEvent = function ($event) {
    // console.log($scope.modelEvent.type);
    $event.preventDefault();
    var event = {
      Title: $scope.modelEvent.title,
      Date: $scope.modelEvent.date,
      About: $scope.modelEvent.about,
      Location: $scope.modelEvent.location,
      Type: $('#selAddTypeEvent').val(),//это не трогать,ни в коем случаИ,даже под дулом пулемета не трогать!!!!
      logo: 'images/' + $scope.modelEvent.logo,
      email_user: $scope.email,
      user_id: $scope.id_user
    };
    console.log(event.user_id + "---"); console.log(event.email_user);
    $scope.events.push(event);
    //  console.log(event);
    $http.post("/api/event", event).then(function (response) {
      console.log(response);
    })
  }




  $scope.AboutEvent = function ($ab) {
    swal({ title: "О событии!", text: $ab, html: true });
  }

  // счетчик для возврата на предыдущую страницу
  $scope.pageBack = function () {
    $scope.currentPage -= $scope.itemsPerPage;
  }

  // счетчик для перехода на следующую страницу
  $scope.pageForward = function () {
    $scope.currentPage += $scope.itemsPerPage;
  }

  // открытие модального окна для создания события
  $scope.addEventOpenModal = function ($event) {
    $event.preventDefault();
    $("#modalAddEvent").modal('open');
  }

  // закрытие модального окна для создания события
  $scope.canselModalEvent = function () {
    //  console.log('close');
    $('#modalAddEvent').modal('close');
  }

  // стандартный массив событий

  //возвращает кол-во всех событий 
  $scope.getTotalEvents = function () {
    return $scope.events.length;
  };

  $scope.openModal = function ($event) {
    $event.preventDefault();
    $("#modal1").modal('open');
  }

  $('#selTypeEvent').hide(); // без этого костыля костыляка не костыляка
  $('#selAddTypeEvent').hide();// и без этого тоже

  // костыляка
  $('#selAddTypeEvent').on('change', function () {
    //console.log($(' ).val());

    if ($('#selAddTypeEvent').val() == 1) {
      $scope.modelEvent.type = "Олимпиада";
    }
    else if ($('#selAddTypeEvent').val() == 2) {
      $scope.modelEvent.type = "Семинар";
    }
    else if ($('#selAddTypeEvent').val() == 3) {
      $scope.modelEvent.type = "Конференция";
    }

  });
  /**/
}


function mainCtrl($scope, $http, $rootScope) {
    $rootScope.auth = false;
    $scope.enter = [];
    $scope.registration = [];
    $scope.eng = false;
    $scope.preloader = false;

    $rootScope.mainC = "mainCtrl";

    Materialize.updateTextFields();

    $scope.part_config = true;
    $scope.part1 = true;
    $scope.part2 = false;
    $scope.part3 = false;

    $scope.Rules = "1 ЗАГАЛЬНІ ПОЛОЖЕННЯ 1.1 Положення про проведення II етапу Всеукраїнської студентської олімпіади з навчальної дисципліни «Інформатика» (далі – Олімпіада) розроблено відповідно до «Положення про Всеукраїнську студентську олімпіаду», яке затверджено  наказом Міністерства освіти і науки України від 13.12.2012 р. №1410 «Про затвердження Положення про проведення Всеукраїнської студентської олімпіади» і визначає порядок її організації та проведення серед студентів вищих навчальних закладів (далі -ВНЗ) ІІІ-ІV рівнів акредитації незалежно від форм власності та підпорядкування (далі - Учасники). 1.2 II етап Олімпіади проводиться у Національному аерокосмічному університеті ім. М. Є. Жуковського «Харківський авіаційний інститут» ( далі – Університет) згідно з наказом МОН України № 1495 від 09.12.16 р. «Про затвердження Положення про Проведення Всеукраїнської студентської олімпіади» та наказом ректора Університету від 22.02.2017  р. № 11 у термін з 18 квітня по 20 квітня 2017 року. 1.3 Олімпіада – це змагання студентів у творчому застосуванні здобутих знань, умінь і навичок, а також у професійній підготовці майбутніх спеціалістів у сфері інформатики серед студентів вищих навчальних закладів ІІІ-ІV рівнів акредитації (далі – ВНЗ), незалежно від форм власності та підпорядкування. 1.4 Основні завдання II етапу Олімпіади – це виявлення та розвиток обдарованої студентської молоді, сприяння реалізації її творчих здібностей, стимулювання творчої праці студентів, педагогічних та науково-педагогічних працівників, формування кадрового потенціалу для дослідницької, виробничої, адміністративної і підприємницької діяльності, відбір студентів для участі в міжнародних олімпіадах. 1.5 Олімпіада проводиться з метою підвищення якості підготовки фахівців і системного вдосконалення освітнього процесу, активізації навчально-пізнавальної діяльності студентів. 1.6 У II етапі Олімпіади можуть брати участь студенти – іноземні громадяни, які навчаються у ВНЗ України. Умови їх участі узгоджуються з Університетом, який є відповідальним за проведення Олімпіади, і не повинні суперечити міждержавним та іншим угодам. 1.7 Учасники Олімпіади отримують олімпіадні завдання і дають на них відповіді державною мовою. Оргкомітет Олімпіади може дозволити підготовку завдань і відповіді на них іншими мовами, згідно Закону України «Про засади державної мовної політики». 2 РОБОЧІ ОРГАНИ II ЕТАПУ ОЛІМПІАДИ 2.1 Для організації і проведення II етапу Олімпіади в Університеті створюються організаційний комітет, журі, мандатна та апеляційні комісії.2.2 Організаційний комітет.2.2.1 Склад організаційного комітету.До складу оргкомітету лімпіади входять провідні науково-педагогічні працівники, вчені Університету.Склад Оргкомітету та його голова затверджуються наказом Ректора Університету. 2.2.2 Обов’язки організаційного комітету.Організаційний комітет здійснює наступне:– розробляє положення про проведення II етапу Олімпіади;– озробляє програму заходів II етапу Олімпіади і забезпечує її проведення у зазначений термін;– організує зустріч, розміщення, харчування, культурно-пізнавальні заходи та від'їзд учасників;– організує і проводить нагородження переможців;– надсилає вищим навчальним закладам результати участі ожного студента;– складає звіт про проведення II етапу Олімпіади;– готує довідки-подання на відзначення активних організаторів II етапу Олімпіади;– сприяє висвітленню результатів II етапу Олімпіади у засобах масової інформації та періодичній пресі.2.3 Журі.2.3.1 Скалад журі. До складу журі II тапу Олімпіади входять провідні науково-педагогічні працівники Університету та інших ВНЗ (за їх погодженням або направленням іншого ВНЗ). Склад затверджується наказом ректора Університету.До складу журі не можуть входити особи, що є близькими родичами Учасників Олімпіади.Журі очолює голова. олова має заступника та секретаря. Голова журі організовує роботу членів журі, проводить засідання журі, бере участь у визначенні переможців, затверджує список переможців.Кількість членів журі не повинна перевищувати третини від кількості студентів, які беруть участь у II етапі Олімпіади.Кількість представників базового вищого навчального закладу в журі  ІІ етапу Олімпіади не повинна перевищувати 50% від загальної кількості членів журі.2.3.2 Обов’язки журі. Журі здійснює наступне:– розробляє та затверджує структуру, зміст завдань та оцінює їх виконання;–	 перевіряє оботи Учасників і визначає переможців II етапу Олімпіади; – аналізує якість виконання студентами завдань, виявляє характерні помилки та оцінює рівень підготовки студентів;– готує збірники конкурсних завдань та методичні рекомендації для підготовки студентів до відповідної Олімпіади.2.4 пеляційна комісія.2.4.1 Склад апеляційної комісії.Склад апеляційної комісії затверджуються наказом Ректора Університету (за їх погодженням або направленням іншого ВНЗ). До складу апеляційної комісії входять представники Університету та інших ВНЗ.2.4.2 Обов’язки апеляційної комісії.Апеляційна омісія оперативно розглядає звернення учасників щодо вирішення суперечних питань, пов’язаних з оцінкою виконання олімпіадних завдань, і виносить відповідні пропозиції на обговорення журі.2.5 Мандатна комісія.2.5.1 Склад мандатної комісії.Склад мандатної комісії затверджуються наказом Ректора ніверситету (за їх погодженням або направленням іншого ВНЗ). До складу мандатної комісії входять представники Університету та інших ВНЗ.2.5.2 Обов’язки мандатної комісії. Мандатна комісія перевіряє повноваження учасників, проводить їх реєстрацію, здійснює шифрування та дешифрування робіт, онтролює виконання даного Положення.3 ПОРЯДОК ОРГАНІЗАЦІЇ І ПРОВЕДЕННЯ II ЕТАПУ ОЛІМПІАДИ	3.1 II етап Олімпіади проводиться між переможцями I етапу згідно з планом проведення олімпіад, затвердженого наказом МОН України №1495 від 09.12.2016р.                                                                                                                                                                       3.2 II етап Олімпіади складається з одного туру. Олімпіадні змагання проводяться для студентів 1-3 курсів, що навчаються за напрямами: 	1) інженерні науки; 	2) економічні та уманітарні науки.        3.3 Умови і порядок проведення, склад оргкомітету, журі та апеляційної комісії II етапу Олімпіади затверджуються наказом Ректора Університету.3.4 Університет надсилає ВНЗ, студенти яких можуть брати участь у II етапіОлімпіади, листи-запрошення (додаток А ) з інформацією ро умови проведення олімпіади та тематикою  олімпіадних завдань, анкету учасника (додаток Б).Кількісний склад учасників II етапу Олімпіади обмежується трьома студентами з одного напряму від кожного ВНЗ у загальному заліку.3.5 Після проведення II етапу Олімпіади та підведення її підсумків ргкомітет у 10-денний термін надсилає  до:– ВНЗ – лист-повідомлення про місце, яке посів студент (додаток В),– до Інституту інноваційних технологій і змісту освіти – звіт про підсумки проведення II етапу олімпіади (додаток Г).4 УЧАСНИКИ ОЛІМПІАДИ4.1 У II етапі Олімпіади беруть участь всі ажаючі туденти ВНЗ ІІІ-ІV рівнів акредитації незалежно від форм власності та підпорядкування, у тому числі іноземці, що навчаються у цих ВНЗ.4.2 Учасники мають право ознайомитися з оцінкою їх роботи та письмово звернутися до апеляційної комісії з приводу об’єктивності оцінки виконаних ними завдань.4.3 часники ІІ етапу Олімпіади повинні мати при собі студентський квиток та паспорт для підтвердження їх особи.5 ПІДВЕДЕННЯ ПІДСУМКІВ  II ЕТАПУ  ОЛІМПІАДИ 5.1 Переможці II етапу Олімпіади визначаються за результатами загальної кількості набраних балів та затверджуються наказом МОН України .5.2 ереможці II етапу Олімпіади нагорожуються віжповідними дипломами.5.3 Дипломом І ступеня нагороджується Учасник, який набрав не менше 80 %, ІІ ступеня – 70 %, ІІІ ступеня – 60 % від максимально можливої сумарної кількості балів, що дорівнює 100 %. При цьому кількість переможців не може еревищувати 10 % від загальної кількості Учасників. Якщо кількість учасників не перевищує 30, переможці визначаються за трьома призовими місцями.5.4 Дипломом I ступеня нагороджується один Учасник. Якщо рівну кількість балів набрали декілька Учасників, які претендують на нагородження дипломом І тупеня, між ними призначається додатковий тур.5.5 За оригінальне, нестандартне розв’язання олімпіадних завдань учасники змагань можуть бути нагороджені заохочувальними та спеціальними дипломами Оргкомітету.5.6 У разі втрати диплом не поновлюється і дублікат не видається.5.7 Переможці II етапу лімпіади мають право на участь у відповідній Міжнародній студентській олімпіаді.5.8  Ректори ВНЗ закладів можуть заохочувати студентів, які посіли призові (І, ІІ, ІІІ) місця у II етапу Олімпіади: – наданням грошової премії, цінного подарунку.5.9 Результати проведення II етапу Всеукраїнської тудентської олімпіади затверджуються наказом Міністерства освіти і науки України5.10 Організатори II етапу Олімпіади відзначаються Міністерством освіти і науки України.6 ФІНАНСУВАННЯ II ЕТАПУ ОЛІМПІАДИ 6.1 Витрати на організацію та проведення II етапу Олімпіади здійснюються за рахунок джерел, не заборонених чинним законодавством України.6.2 Витрати на відрядження студентів та науково-педагогічних працівників для участі у II етапі Олімпіади здійснюються за рахунок ВНЗ, в яких вони навчаються та/або працюють.";

    var checker = document.getElementById('ozn');
    var sendbtn = document.getElementById('SubmitRegForOlymp');
    checker.onchange = function () {
        sendbtn.disabled = !this.checked;
    };

    $('#spec_Type').hide(); // костыль
    $('#spec_Language').hide();// костыль
    $('#spec').hide();// костыль
    $scope.olymp = {
        name: '',
        surname: '',
        patronymic: '',
        birthDate: '',
        HighSchoolName: '',
        HighSchoolAdress: '',
        Faculty: '',
        Scills: '',
        Course: '',
        Type: '',
        Language: '',
        Housing: '',
        WorkSheet: '',
        Desicion: '',
        academic_plan: ''
    };
    $scope.part1 = true;
    $scope.part2 = false;
    $scope.part3 = false;
    $scope.usData = false;
    $scope.progress = false;
    $('#spec').material_select();
    $scope.data1 = [];
    $('.modal').modal({
        dismissible: true, // Modal can be dismissed by clicking outside of the modal
        opacity: .5, // Opacity of modal background
        in_duration: 600, // Переход по продолжительности
        out_duration: 200, // Transition out duration
        starting_top: '4%', // Начиная с верхнего атрибута стиля
        ending_top: '10%', // Ending top style attribute
        ready: function (modal, trigger) { // Обратный вызов для модального открытым. Модальные и параметры запуска доступных.
            console.log(modal, trigger);
        },
    });
    $(".button-collapse").sideNav();

    if (localStorage.getItem('auth')) {
        $rootScope.auth = true;
    } else {
        $rootScope.auth = false;
    }

    if (localStorage.getItem('auth')) {
        $scope.UserData = JSON.parse(localStorage.getItem('auth'));
        $scope.email = JSON.parse(localStorage.getItem('auth')).email;
    }

    $scope.addToParticipant = function () {

        console.log(email + "222");
        $http.get("api/registr/" + email).then(function (response) {
            console.log(response);
            $scope.events = response.data;

            $scope.preLoader = false;
        })
    }
    $scope.UserEvents = function () {

        em = String($('#ema').val());
        console.log(em);
        $http.get("/api/event/" + em).then(function (response) {
            console.log(response);
            $scope.usersInEv = response.data;
            console.log($scope.usersInEv);
        })
    }


    $scope.Exit = function () {
        localStorage.clear();
         $rootScope.createEv = false;
        $rootScope.auth = false;
        $scope.usData = false;
        $('#ema').val();
        $scope.progress = false;
    };
    $scope.getTotalEnter = function () {
        return $scope.enter.length;
    };
    $scope.GetEnter = function () {
        return $scope.enter;
    };
    $scope.openModalAuthorization = function ($event) {
        $scope.progress = false;
        $event.preventDefault();
        $('#authorization').modal('open');
        $('#error_authorization').text('');
    }
    $scope.openModalRegistration = function ($event) {
        $scope.progress = false;
        $event.preventDefault();
        $('#registration').modal('open');
        $('#error_registration').text('');
    }

    $scope.openModalUserPage = function ($event) {
        $event.preventDefault();
        $('#user_page').modal('open');
        $('#error_user_page').text('');
    }

    $scope.closeModalUserPage = function ($event) {
        $event.preventDefault();
        $scope.usData = false;
        $('#user_page').modal('close');
        $('#error_user_page').text('');
    }

    $scope.addEnter = function () {
        var email = $('#ema').val();
        var password = $('#password').val();
        var span = $('#error_authorization');
        var adr_email = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
        var isValid = true;
        $('#error_authorization').text('');
        /* validation form*/
        email = email.trim();
        password = password.trim();
        if (email === '') {
            $('#error_authorization').text('Заполните пустые поля');
            isValid = false;
        }
        else if (adr_email.test(email) === false) {
            $('#error_authorization').text('Некоректный email');
            isValid = false;
        }
        if (password === '') {
            $('#error_authorization').text('Заполните пустые поля');
            isValid = false;
        }
        if (isValid) {
            $scope.progress = true;
            var user = {
                email: email,
                password: password
            };

            $http.get("api/registr/" + email).then(function (response) {
                var data = response.data;
                $scope.data = data;
                console.log(response.data);
                if (response.data.length !== 0) {
                    if (String(data[0].password).trim() === String(password)) {
                        $scope.enter.push(user);
                        if (data[0].eventMaster === true)
                            $rootScope.createEv = true;
                        else $rootScope.createEv = false;
                        console.log($rootScope.createEv);
                        if (data[0].active === true) {
                            localStorage.setItem('auth', JSON.stringify(data[0]));
                            $scope.UserData = data[0];
                            console.log($scope.UserData);
                            $rootScope.auth = true;
                            $('#authorization').modal('close');
                        }
                        else {
                            $scope.progress = false;
                            $('#error_authorization').text('Подтвердите регистрацию на почте');
                            return;
                        }
                    }
                    else {
                        $scope.progress = false;
                        $('#error_authorization').text('Неверный логин или пароль');
                    }
                } else {
                    $scope.progress = false;
                    $('#error_authorization').text('Неверный логин или пароль');
                }
            })
            $scope.progress = true;
        }
    };


    $scope.addRegistration = function () {
        $('#error_registration').text('');
        var surname = $('#surname').val();
        var name = $('#name').val();
        var email = $('#em').val();
        var password1 = $('#pas1').val();
        var password2 = $('#pas2').val();
        var span = $('#error_registration');
        var adr_name = /^([a-zA-Zа-яА-Я]){3,40}$/i;
        var adr_email = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
        /* validation form*/
        surname = surname.trim();
        name = name.trim();
        email = email.trim();
        password1 = password1.trim();
        password2 = password2.trim();
        var isValid = true;
        var pas = true;
        if (surname === '') {
            $('#error_registration').text('Заполните пустые поля');
            isValid = false;
        } else if (adr_name.test(surname) === false) {
            span.text("Некорректная фамилия.");
            isValid = false;
        }
        if (name === '') {
            $('#error_registration').text('Заполните пустые поля');
            isValid = false;
        } else if (adr_name.test(name) === false) {
            span.text("Некорректное имя");
            isValid = false;
        }
        if (email === '') {
            $('#error_registration').text('Заполните пустые поля');
            isValid = false;
        } else if (adr_email.test(email) === false) {
            span.text("Некорректный email");
            isValid = false;
        }
        if (password1 === '') {
            $('#error_registration').text('Заполните пустые поля');
            isValid = false;
            pas = false;
        }
        else if (password2 === '') {
            $('#error_registration').text('Заполните пустые поля');
            isValid = false;
            pas = false;
        }
        else if (pas) {
            if (password1 !== password2) {
                $('#error_registration').text('Пароли не совпадают');
                isValid = false;
            }
        }
        if (isValid) {
            console.log($scope.progress);
            $scope.progress = true;
            console.log($scope.progress);
            var user = {
                Name: name,
                Surname: surname,
                email: email,
                password: password1
            };
            $http.post("/api/registr", user).then(function (response) {
                console.log(response);
                $scope.registration.push(user);
                console.log(localStorage.getItem('auth'));
                if (response.status == 200) {
                    swal("Регистрация выполнена!", "Вам отправленно письмо на email для активации аккаунта.", "success")
                    $('#registration').modal('close');
                }
            })
        }
    }


    $scope.Excell = function ($event_id) {
        console.log($event_id);
        var obj = {
            Id_Event: $event_id,
        };
        swal({
            title: "Получить отчет",
            text: "Список зарегестрированных пользователей на ивент",
            type: "info",
            showCancelButton: true,
            closeOnConfirm: false,
            showLoaderOnConfirm: true,
        },
            function () {
                $http.get("api/excell/" + obj.Id_Event).then(function (response) {
                    swal("Отчет сформирован");
                });
            });
    }

    $(document).ready(function () {
        $('.collapsible').collapsible();
    });

    $scope.tr = function () {
        swal({
            title: "Правила проведения олимпиады",
            text: "Тercn",
            type: "warning",
            showCancelButton: true,
            // confirmButtonColor: "green",
            confirmButtonText: "Согласен",
            closeOnConfirm: false
        },
            function () {
                swal("Сам согласился", "Поздравляю", "success");
            });
    }

    $scope.olymp_modal = function ($event) {
        $event.preventDefault();
        $("#olymp").modal('open');
    }


    $scope.ChangeUserPage = function () {
        $scope.usData = true;
    }


    $scope.ChangeUserData = function () {

        var surname = $('#newSurname').val();
        var name = $('#newName').val();
        var email = $('#newEmail').val();
        var password0 = $('#newPass0').val();
        var password1 = $('#newPass1').val();
        var password2 = $('#newPass2').val();
        var span = $('#error_user_page');
        var adr_name = /^([a-zA-Zа-яА-Я]){3,40}$/i;
        var adr_email = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
        surname = surname.trim()
        name = name.trim();
        email = email.trim();
        password0 = password0.trim();
        password1 = password1.trim();
        password2 = password2.trim();
        var isValid = true;
        var forPassword = true;
        if (surname === '') {
            $('#error_user_page').text('Заполните пустые поля');
            isValid = false;
        } else if (adr_name.test(surname) === false) {
            span.text("Некорректная фамилия.");
            isValid = false;
        }
        if (name === '') {
            $('#error_user_page').text('Заполните пустые поля');
            isValid = false;
        } else if (adr_name.test(name) === false) {
            span.text("Некорректное имя");
            isValid = false;
        }
        if (email === '') {
            $('#error_user_page').text('Заполните пустые поля');
            isValid = false;
        } else if (adr_email.test(email) === false) {
            span.text("Некорректный email");
            isValid = false;
        }
        if (password0 === '') {
            $('#error_user_page').text('Заполните пустые поля');
            isValid = false;
        }
        if (password1 === '') {
            $('#error_user_page').text('Заполните пустые поля');
            isValid = false;
        }
        if (password2 === '') {
            $('#error_user_page').text('Заполните пустые поля');
            isValid = false;
        }
        if (isValid !== false) {
            if (password0 !== $scope.UserData.password) {
                $('#error_user_page').text('Прежний пароль введён неправильно.');
                isValid = false;
                forPassword = false;
            }
            if (forPassword !== false) {
                if (password1 !== password2) {
                    $('#error_user_page').text('Новый пароль повторен неправильно');
                    isValid = false;
                }
            }
        }
        if (isValid) {
            $scope.preloader = true;
            console.log($scope.preloader)
            var newData = {
                ID: $scope.id1,
                Name: name,
                Surname: surname,
                Email: email,
                Password: password1
            };
            $http.put("/api/registr", newData).then(function (response) {
                if (response.status == 200) {
                    $scope.registration.push(newData);
                    localStorage.setItem('auth', JSON.stringify({ id: $scope.id1, name: name, surname: surname, email: email, password: password1 }));
                    $rootScope.auth = true;
                    $scope.usData = true;
                    // localStorage.setItem('auth', JSON.stringify(data[0]));
                    // $scope.UserData = data[0];
                    $('#user_page').modal('close');
                    $scope.preloader = false;
                    $scope.usData = false;
                }
            })
        }
    }


    $scope.olymp_part = function (text) {
        if (text === 'part1') {
            $scope.part1 = true;
            $scope.part2 = false;
            $scope.part3 = false;
        } else if (text === 'part2') {
            $scope.part1 = false;
            $scope.part2 = true;
            $scope.part3 = false;
        } else if (text === 'part3') {
            $scope.part1 = false;
            $scope.part2 = false;
            $scope.part3 = true;
        }
    }


    $scope.reg_olymp = function () {
        var isValid = true;
        $('#error_olymp').text('');
        $('#olymp_name_label').text('Имя');
        $('#olymp_surname_label').text('Фамилия');
        $('#olymp_patronymic_label').text('отчество');
        $('#olymp_email_label').text('Електронная почта');
        $('#olymp_birthDate_label').text('Дата рождения');
        $('#olymp_HighSchoolName_label').text('Вищий навчальный заклад(Назва)');
        $('#error_olymp').text('Вищий навчальный заклад(Адресс)');
        $('#olymp_Faculty_label').text('Факультет');
        $('#olymp_Scills_label').text('специальность');
        $('#olymp_Course_label').text('курс');

        var adr_name = /^([a-zA-Zа-яА-я0-9]){3,40}$/i;
        var adr_email = /^([a-z0-9_\-]+\.)*[a-z0-9_\-]+@([a-z0-9][a-z0-9\-]*[a-z0-9]\.)+[a-z]{2,4}$/i;
        var courseValidate = /^([1-2]){1,3}$/i;
        var addressUniversiry = /^([a-zA-Zа-яА-Я0-9., ]){5,40}$/i;
        if ($scope.olymp.name === '') {
            $('#olymp_name_label').text('Имя *');
            isValid = false;
        } else if (adr_name.test($scope.olymp.name) === false) {
            isValid = false;
            $('#olymp_name_label').text('Некоректное Имя');
        }

        if ($scope.olymp.surname === '') {
            isValid = false;
            $('#olymp_surname_label').text('Фамилия *');
        } else if (adr_name.test($scope.olymp.Surname) === false) {
            isValid = false;
            $('#olymp_surname_label').text('Некоректная фамилия');
        }

        if ($scope.olymp.patronymic === '') {
            $('#olymp_patronymic_label').text('Отчество *');
            isValid = false;
        } else if (adr_name.test($scope.olymp.patronymic) === false) {
            isValid = false;
            $('#olymp_patronymic_label').text('Некоректное отчество');
        }

        if ($scope.olymp.email === '') {
            $('#olymp_email_label').text('Електронная почта *');
            isValid = false;
        } else if (adr_email.test($scope.olymp.email) === false) {
            isValid = false;
            $('#olymp_email_label').text('Некоректный емейл');
        }

        if ($scope.olymp.birthDate === undefined || $scope.olymp.birthDate == "") {
            $('#olymp_birthDate_label').text('Дата рождения *');
            isValid = false;
        } else if (new Date($scope.olymp.birthDate) >= new Date()) {
            isValid = false;
            $('#olymp_birthDate_label').text('Некоректная Дата рождения');
        }

        if ($scope.olymp.HighSchoolName === '') {
            $('#olymp_HighSchoolName_label').text('Вищий навчальный заклад(Назва) *');
            isValid = false;
        } else if (adr_name.test($scope.olymp.HighSchoolName) === false) {
            isValid = false;
            $('#olymp_HighSchoolName_label').text('Некоректное название');
        }

        if ($scope.olymp.HighSchoolAdress === '') {
            $('#olymp_HighSchoolAdress_label').text('Вищий навчальный заклад(Адресс) *');
            isValid = false;
        } else if (addressUniversiry.test($scope.olymp.HighSchoolAdress) === false) {
            isValid = false;
            $('#olymp_HighSchoolAdress_label').text('Некоректный адресс');
        }

        if ($scope.olymp.Faculty === '') {
            $('#olymp_Faculty_label').text('Факультет *');
            isValid = false;
        } else if (adr_name.test($scope.olymp.Faculty) === false) {
            isValid = false;
            $('#olymp_Faculty_label').text('Некоректный Факультет');
        }

        if ($scope.olymp.Scills === '') {
            $('#olymp_Scills_label').text('специальность *');
            isValid = false;
        } else if (adr_name.test($scope.olymp.Scills) === false) {
            isValid = false;
            $('#olymp_Scills_label').text('Некоректная специальность');
        }

        if ($scope.olymp.Course === '') {
            $('#olymp_Course_label').text('курс *');
            isValid = false;
        } else if (courseValidate.test($scope.olymp.Course) === false) {
            isValid = false;
            $('#olymp_Course_label').text('Некоректный курс');
        }

        // if ($scope.olymp.Course === '') {
        //     $('#error_olymp').text('Заполните пустые поля');
        //     isValid = false;
        // } else if (adr_name.test($scope.olymp.Course) === false) {
        //     isValid = false;
        //     $('#error_olymp').text('Некоректное отчество');
        // }

        var lang = [];
        var live = "";
        if ($('#spec').val()) {
            if ($('#spec').val() == 1)
                live = "потребую";
            else if ($('#spec').val() == 2)
                live = "не потребую";

            if ($scope.olymp.Type) {
                if ($scope.olymp.Type == 1)
                    $scope.olymp.Type = "Инженерные науки";
                else if ($scope.olymp.Type == 2)
                    $scope.olymp.Type = "Гуманитарные науки";

                if ($scope.olymp.Type == "Инженерные науки")
                    if ($scope.olymp.Language) {
                        var field = $scope.olymp.Language.join(',');
                        console.log('------------------------------------');
                    } else {
                        isValid = false;
                    }
            } else {
                isValid = false;
            }
        } else {
            isValid = false;
        }


        if (isValid) {
            var obj_reg = {
                Name: $scope.olymp.name,
                Surname: $scope.olymp.surname,
                Patronymic: $scope.olymp.patronymic,
                Email: $scope.olymp.email,
                BirthDate: $scope.olymp.birthDate,
                HighSchoolName: $scope.olymp.HighSchoolName,
                HighSchoolAdress: $scope.olymp.HighSchoolAdress,
                Faculty: $scope.olymp.Faculty,
                Scills: $scope.olymp.Scills,
                Course: $scope.olymp.Course,
                Type: $scope.olymp.Type,
                Language: field,
                Housing: live
            };

            $http.post("/api/olymp", obj_reg, {
                headers: {
                    //'Content-Type': undefined
                },
                //transformRequest: angular.identity
            }).then(function (response) {
                console.log('success');
                $scope.part2 = false;
                $scope.part3 = true;
                $scope.part_config = false;
                $('#Surname_files').val($scope.olymp.surname);
            })
        } else {
            $('#error_olymp').text('Заполните пустые поля');
        }
    }


    // костыляка
    $('#spec_Type').on('change', function () {
        console.log($('#spec_Type').val());
        $scope.eng = 1;
        if ($('#spec_Type').val() == 1) {
            $scope.eng = true;
            $scope.olymp.Type = "Инженерные науки";
        }
        else if ($('#spec_Type').val() == 2) {
            $scope.eng = false;
            $scope.olymp.Type = "Гуманитарные науки";
        }
        console.log($scope.eng);
    });
}
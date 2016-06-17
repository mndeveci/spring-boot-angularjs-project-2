
var myModuleConfig = function($stateProvider, $urlRouterProvider){

    // herhangi bir eşleşme olmaması halinde,
    //    hangi sayfaya gideceği durumunu belirtir
    $urlRouterProvider.otherwise("/");

    // bu satırdan itibaren, uygulamadaki
    //    durumları tanımlamaya başlıyoruz
    $stateProvider.state("home", {
        // adres çubuğunda görünecek yolun tanımı
        url: "/",
        // bu durumun sayfa olarak gösterim dosyasını işaret eder
        templateUrl: "/views/home.html",
        // durumu kontrol eden kod parçaçığı
        controller: "myHomeController"
    });

};
// yukarıda fonksiyon tanımında kullandığımız servis vs objelerinin
//    angular içerisinden buraya inject edilmesini sağlar
myModuleConfig.$inject = ["$stateProvider", "$urlRouterProvider"];

// sayfamızı yönetecek kod parçacığı
// $scope servisi, sayfanızdaki değişkenlere,
//     controller üzerinden erişmenizi sağlar
//     o yüzden ön yüzden erişilmesi istenen tüm değişkenleri
//     $scope altnda tanımlamanız gerekir
var myHomeController = function($scope){
    // name adında bir değişken tanımlıyoruz,
    //   bunu input'a model olarak tanımlayacağız
    $scope.name = "";

    // listelemede göstereceğimiz bütün isimlerin listesi
    $scope.names = [];

    // isim listesine isim ekleme fonksiyonu
    $scope.addName = function() {
        $scope.names.push($scope.name);
        $scope.name = "";
    }
};
myHomeController.$inject = ["$scope"];

// angular'daki modül tanımı aşağıdaki gibidir, myFirstAngularModule modül adıdır.
//    modül adından sonraki dizi ise, modülün bağımlılıklarını belirtir
//    bizim sadece UI Router bağımlılığımız mevcut olduğu için onu belirtiyoruz
angular.module("myFirstAngularModule", ["ui.router"])
    // yukarıda yazdığımız config sınıfını modülümüze uyguluyoruz
    .config(myModuleConfig)
    // myHomeController controller nesnesini kaydediyoruz
    .controller("myHomeController", myHomeController);
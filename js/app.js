angular.module('app-project', [])
    .controller('controller-project', ($scope, $http) => {
        $scope.cities = [];
        $scope.citySelected = null;

        $scope.from = new Date()
        $scope.to = new Date()
        $scope.from.setDate($scope.to.getDate( - 30));
        $scope.radiation = null;

        $http.get('../json/CoordenadasColombia.json')
            .then((response) => {
                $scope.cities = response.data;
            });

        
        function formatDate(date) {
            const year = date.getFullYear();
            const month = (date.getMonth() + 1).toString().padStart(2, '0');
            const day = (date.getDate()).toString().padStart(2, '0');
            return `${year}${month}${day}`;
        }

       
        $scope.queryRadiation = (citySelected) => {
            if (!citySelected) {
                return;
            }
            const url = 'https://power.larc.nasa.gov/api/temporal/daily/point';
            const parameters = {
                parameters: 'ALLSKY_SFC_SW_DWN',
                start: formatDate($scope.from),
                end: formatDate($scope.to),
                latitude: citySelected.lat,
                longitude: citySelected.lon,
                format: 'JSON',
                community: 'RE'
            }
            const query = Object.entries(parameters)
                .map(([key, value]) => `${key}=${value}`)
                .join('&')
            const urlFinal = `${url}?${query}`;

            $http.get(urlFinal)
                .then((response) => {
                    const data = response.data.properties.parameter.ALLSKY_SFC_SW_DWN;
                    $scope.radiation = data;
                });
        };
            

    });
export default {
    data: () => ({
        backend: "https://urltobackend/api"
    }),
    methods: {
        async fatch(endpoint, variables){
            var _this = this;
            var url = "";
            var fetchMethod = "";
            var b0dy= null;
            switch(endpoint) {
                case "getUser":
                    url = this.backend + "/persons/getUser";
                    fetchMethod = "GET";
                    break;
                case "changePerson":
                    url = this.backend + "/persons/changePerson";
                    fetchMethod = "POST";
                    b0dy = JSON.stringify({"ID":variables[0], "firstname":variables[1], "lastname": variables[2]})
                }
                // Set the fetch with variables
                var resfetch = await fetch(url, {method: fetchMethod,
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': 'Bearer ' + store.state.token},body: b0dy})
                    .then(async function(response){if(response.status != 200){console.log("Oh no do stuff");}return response.json();})
                    .then(async function (data) {if(_this.check == true){console.log("Alright");}return data;})
                    return resfetch;
        }
    }
}

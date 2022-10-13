const axios = require('axios');
const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())



app.get('/products', function(request, resolve, next) {
	axios.post(
		'https://www.alza.cz/Services/RestService.svc/v2/products',
		{
			"filterParameters": {
			  "id": 18855843,
			  "isInStockOnly": false,
			  "newsOnly": false,
			  "wearType": 0,
			  "orderBy": 0,
			  "page": 1,
			  "params": [{
				"tId": 0,
				"v": []
			  }],
			  "producers": [],
			  "sendPrices": true,
			  "type": "action",
			  "typeId": "",
			  "branchId": ""
			}
	},
	  {
		headers: {
			'Content-Type': 'application/json',
			'Accept': '*/*'
			}
		}
	  ).then((response) => {resolve.json(response)}).catch((error)=>{resolve.json(error); console.log(error)});
})

app.get('/', function (req, res, next) {
  res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3001, function () {
  console.log('CORS-enabled web server listening on port 3001')
})
import fetch from 'node-fetch';
import express from 'express';
import cors from 'cors';

const app = express();

app.use(cors);

const bodyParameters = JSON.stringify(
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
	}
);

const requestSettings = {
	method: 'POST',
	cache: 'no-cache',
	headers: {
		'Content-Type': 'application/json',
		'Accept': '*/*',
		'Accept-Encoding': 'gzip, deflate, br, identity',
		'Connection': 'keep-alive'
	},
	body: bodyParameters
};

app.get('/products', function(request, res, next) {
	fetch('https://www.alza.cz/Services/RestService.svc/v2/products', requestSettings)
		.then((response) => {
			console.log(response);
			res.json(response);
		})
		.catch((error)=>{
			console.log(error);
			res.send(error);
		});
})

app.get('/', function (req, res, next) {
	res.json({msg: 'This is CORS-enabled for all origins!'})
})

app.listen(3001, function () {
	console.log('CORS-enabled web server listening on port 3001')
})
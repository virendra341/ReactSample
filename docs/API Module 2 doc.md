# Common Guidelines 

### Request Headers

> Every request (except Signup & Login) must carry these headers. 

```
  X-Access-Token
```

### Response Headers 
> Every response must carry these headers. 

```Javascript
X-API-Version   // Current API Version
X-API-Delay     // Total time taken to complete the request
```

### Success Response
> Valid _only_ for responses with no data
> In all API which are creating new record after sending requrest
 please send record id with success report. It will reduce a server call to get profile
 related data, we will set this record id with inserted data in our object
 
```
200
{
  "success": true, 
}
```

### Error Response for valid data 

> Valid _only_ for responses for error - Internal server error, Record already exist 

```
200
{
  "error": true,
  "errorMessage":"Internal server error, please try after some time" 
}
```

### Error Response for invalid data 

> Valid _only_ for responses for error - Mandatory Field 
 
```
200
{
	 "error":true,
	 "errorMessage":{"from":["The from field is required."],"to":["The to field is required."]}}
}

```

# Modules

## 1. On Boarding 

### Fetch Cloud Provider 

> Returns a list of all current cloud providers 

```
GET /cloudProviders 

200
{
  "cloudProvider" :[
      {
        "id":1,
        "name":"Amazor Web Server",
        "logo":"<httpLogoUrl>"
      },
      {
        "id":2,
        "name":"Microsoft Azure",
        "logo":"<httpLogoUrl>"
      },
      {
        "id":3,
        "name":"Google cloud",
        "logo":"<httpLogoUrl>"
        
      }
  ]
}
```

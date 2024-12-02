# Setup

- Ensure this repository is inside the `ms-ultra-app` folder, alongside the `ms-ultra-backend`
- Follow the setup for ms-ultra-backend repository
- After following the instructions, you should have the backend application running
- Build this application: `docker-compose build`
- When successful, run this application: `docker-compose up -d`
- Ensure this is on the same network as the backend app: `docker network inspect ms_ultra_network`
- Should see something like:

```
 {
        "Name": "ms_ultra_network",
        "Id": "93562d98dd89985b94ec58942ad9480e10c3337ae0a7ba4b4fe302af24adebdd",
        "Created": "2024-12-02T21:56:51.646928152Z",
        "Scope": "local",
        "Driver": "bridge",
        "EnableIPv6": false,
        "IPAM": {
            "Driver": "default",
            "Options": {},
            "Config": [
                {
                    "Subnet": "172.19.0.0/16",
                    "Gateway": "172.19.0.1"
                }
            ]
        },
        "Internal": false,
        "Attachable": false,
        "Ingress": false,
        "ConfigFrom": {
            "Network": ""
        },
        "ConfigOnly": false,
        "Containers": {
            "59bb242649400f3b2516a92c8a5307c0755bee09ab3c0fe6efde0b5942402b28": {
                "Name": "ms_ultra_mongo_db",
                "EndpointID": "b8e2819df5820accbf11d52ef5841a9da027b29b95bc21d14207495fba3eeae7",
                "MacAddress": "02:42:ac:13:00:03",
                "IPv4Address": "172.19.0.3/16",
                "IPv6Address": ""
            },
            "731a77c801d8651e6bbe97b98227965f34f7244b3f89389e62c2aa433330a823": {
                "Name": "ms_ultra_postgres_db",
                "EndpointID": "330e4debf4b538caa23be94d12a7ea829bf52d3d37279b1b0226b48b52d9b6ef",
                "MacAddress": "02:42:ac:13:00:02",
                "IPv4Address": "172.19.0.2/16",
                "IPv6Address": ""
            },
            "8ff424b0c69ccfb5daebdc39223b608d247983695cb978b0a8c7f50e2a3d6090": {
                "Name": "ms_ultra_backend_dev",
                "EndpointID": "a97748a565d1c4e1f0ae498607c636b5c2f089f385c432dda1f12a5b56901a27",
                "MacAddress": "02:42:ac:13:00:04",
                "IPv4Address": "172.19.0.4/16",
                "IPv6Address": ""
            },
            "f3a178a77bb8591d304e550ed7a0329bc40aa6da5e1b68f82439e6cec0f5faf6": {
                "Name": "ms_ultra_frontend_dev",
                "EndpointID": "41271d6b8947ad16ef3c8aa14190a8116caad48beb39f2d28c5f4d3757b2d3ea",
                "MacAddress": "02:42:ac:13:00:05",
                "IPv4Address": "172.19.0.5/16",
                "IPv6Address": ""
            }
        },
        "Options": {},
        "Labels": {}
    }
```
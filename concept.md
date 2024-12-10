1. Wiadomość jest wysyłana za pomocą MQTT pod temat: `discover/<typ_detektora>`. Schemat wysyłanej wiadomości:
    ```json
    {
        "discovery_id": "04c1cbe4-0d84-486b-8b4c-ee26d090f5d9"
    }
    ```

2. Worker nasłuchuje na temacie `offer/<search_id>`. Przychodzące wiadomości mają następujacy schemat:
    ```json
    {
        "worker_id": "bcf8bce2-626b-4822-8cfd-89af9622b985",
        "tasks_waiting": 17,
        "tasks_doing": 2,
        "estimated_wait_time": 437   // null possible
    }
    ```

3. 
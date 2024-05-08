/**
* @swagger
* definitions:
*   eventos:
*     type: object
*     properties:
*       quant_horas:
*         type: integer
*       dono_evento:
*         type: string
*       local_evento:
*         type: string
*       titulo_evento:
*         type: string
*   


* /evento:
*   post:
*     tags:
*       - Eventos
*     description: Cadastra um evento
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/eventos'   
*     responces:
*       200:
*         description: Evento cadastrado
*       400:
*         description: Erro


* /eventos:
*   get:
*     tags:
*       - Eventos
*     description: Retorna todos os eventos
*     responses:
*       200:
*         description: tras todos os eventos
*       400:
*         description: Erro


* /evento/{id}:
*   get:
*     tags:
*       - Eventos
*     description: Retorna um evento
*     parameters:
*       - name: id
*         in: path
*         description: id do evento desejado
*         required: true
*         type: string
*     responses:
*       200:
*         description: tras um evento
*       400:
*         description: Erro


*   put:
*     tags:
*       - Eventos
*     description: modifica evento
*     parameters:
*       - name: id
*         in: path
*         description: id do evento desejado
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/eventos'   
*     responces:
*       200:
*         description: Evento modificado
*       400:
*         description: Erro


*   delete:
*     tags:
*       - Eventos
*     description: Exclui um evento
*     parameters:
*       - name: id
*         in: path
*         description: id do evento desejado
*         required: true
*         type: string
*     responces:
*       200:
*         description: Evento excluido
*       400:
*         description: Erro

*/
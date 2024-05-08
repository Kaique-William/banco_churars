/**
* @swagger
* definitions:
*   bebida:
*     type: object
*     properties:
*       id_evento:
*         type: integer
*       nome_bebida:
*         type: string
*       quant_bebida:
*         type: integer


* /bebida:
*   post:
*     tags:
*     - Bebida
*     description: Cadastra bebida
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/bebida'   
*     responces:
*       200:
*         description: bebida cadastrada
*       400:
*         description: Erro
*   get:
*     tags:
*     - Bebida
*     description: Retorna um bebida
*     responses:
*       200:
*         description: tras bebida
*       400:
*         description: Erro


* /bebida/{id}:

*   put:
*     tags:
*     - Bebida
*     description: modifica bebida
*     parameters:
*       - name: id
*         in: path
*         description: id da bebida desejada
*         required: true
*         type: string
*     requestBody:
*       required: true
*       content:
*         application/json:
*           schema:
*             $ref: '#/definitions/bebida'   
*     responces:
*       200:
*         description: bebida modificada
*       400:
*         description: Erro


*   delete:
*     tags:
*     - Bebida
*     description: Exclui bebida
*     parameters:
*       - name: id
*         in: path
*         description: id da bebida desejada
*         required: true
*         type: string
*     responces:
*       200:
*         description: bebida excluida
*       400:
*         description: Erro

*/
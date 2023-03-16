var express = require('express');
var app = express();

/**
 * @swagger
 * tags:
 *   - name: User
 *     description: "User Management"
 * components:
 *   schemas:
 *     registerUser:
 *       type: object
 *       required:
 *         - username
 *         - orgname
 *       properties:
 *         username:
 *           type: string
 *           description: Name of User
 *         orgname:
 *           type: string
 *           description: Organization name
 *       example:  
 *         username: bansaltushar 
 *         orgname: Org1 
 *     deleteUser:
 *       type: object
 *       required:
 *         - username
 *         - orgname
 *       properties:
 *         username:
 *           type: string
 *           description: Name of User
 *         orgname:
 *           type: string
 *           description: Organization name
 *       example:  
 *         username: bansaltushar 
 *         orgname: Org1 
 *     updateUser:
 *       type: object
 *       required:
 *         - username
 *         - orgname
 *       properties:
 *         username:
 *           type: string
 *           description: Name of User
 *         orgname:
 *           type: string
 *           description: Organization name
 *       example:  
 *         username: bansaltushar 
 *         orgname: Org1 
 *     readUser:
 *       type: object
 *       required:
 *         - username
 *         - orgname
 *       properties:
 *         username:
 *           type: string
 *           description: Name of User
 *         orgname:
 *           type: string
 *           description: Organization name
 *       example:  
 *         username: bansaltushar 
 *         orgname: Org1   
 */


/**
 * @swagger
 * /register:
 *  post:
 *    summary: Register functionality
 *    tags:
 *      - User
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/registerUser'
 *  delete:
 *    summary: delete functionality
 *    tags:
 *      - User
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/deleteUser'
 *  patch:
 *    summary: Update functionality
 *    tags:
 *      - User
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/updateUser' 
 *  get:
 *    summary: read functionality
 *    tags:
 *      - User
 *    requestBody:
 *      required: false
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/readUser'
 *    responses:
 *      200:
 *        description: User registration successfully
 *      500:
 *        description: Internal Server Error
 *      400:
 *        description: Bad Request
 *      403:
 *        description: Method Not Allowed
 */
app.use('/registers', async (req, res) => {

    // const username = req.body.username;

    // const orgname = req.body.orgname;

    // if (orgname == 'Org1' || orgname == 'Org2') {

        // const result = await registerUser(username, orgname);

        // const token = await getAuthToken(username, orgname);

        res.send("result");
    // } else {
        // res.send("Invalid orgname!");
    // }
})

module.exports=app;
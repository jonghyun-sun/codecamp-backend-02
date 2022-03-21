/**
 * @swagger
 * /user:
 *   get:
 *      summary: 게시글 가져오기
 *      tags: [Board]
 *      parameters:
 *          - in: query
 *            name: number
 *            type: int
 *              
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array    
 *                          items:
 *                              properties:
 *                                  email:
 *                                      type: string
 *                                      example: qwe@@@gmail.com                                     
 *                                  name: 
 *                                      type: string
 *                                      example: 철수                                     
 *                                  phone:
 *                                      type: string
 *                                      example: 01012345678
 *                                  personal:
 *                                      type: string
 *                                      example: 220110-222212
 *                                  prefer:
 *                                      type: string
 *                                      example: www.naver.com
 *  
 *                                  
 *              
 *                                  
 * 
 * 
 * @swagger
 * /starbucks:
 *   get:
 *      summary: 게시글 가져오기
 *      tags: [Board]
 *      parameters:
 *          - in: query
 *            name: number
 *            type: int
 *      responses:
 *          200:
 *              description: 성공
 *              content:
 *                  application/json:
 *                      schema:
 *                          type: array
 *                          items:
 *                              properties:
 *                                  name:
 *                                      type: string
 *                                      example: 아메리카노
 *                                  kcal:
 *                                      type: number
 *                                      example: 5
 *                                 
 */



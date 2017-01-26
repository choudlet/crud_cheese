// Update with your config settings.


module.exports = {
    development: {
      client: 'pg',
      connection: 'postgres://localhost/great_cheeses'
    },

    production:{
      client:'pg',
      connection: 'postgres://mbnpulssfhijru:26e2a66a70d369ae065d4d5da8e16438e8e940126914acd1867edc7c980c1a5e@ec2-54-83-47-194.compute-1.amazonaws.com:5432/d5bs8q2tnf8le0'+'?ssl=true'
    }

  }

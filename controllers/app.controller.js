module.exports = {
  // A func that take in two param req, res
  getIndexPage: (req, res) =>{
   if(req.user.isLoggedIn()) {
     return res.send('hey');
   }
   res.send('Ooops, You need to log in to acces this page');
  }
}
<MyButton color =" blue " shadowSize ={2}> Clique aquiIntroducao </ MyButton >
 //
 //
 const nomeCliente = 'Joaquim Jose da Sillva Xavier';
 const element = <h1 >Hello , { nomeCliente } </h1 >;

 ReactDOM . render (element , document . getElementById ('root ')) ;
 // Outro exemplo
 function formatarNome ( cliente ) {
 return cliente.firstName + '' + cliente.lastName ;
 }

 const cliente = {
 firstName : 'Joaquim ',
 lastName : 'Xavier'
 };

 const elemento = (<h1 >Hello , { formatarNome ( cliente ) }!</h1 >) ;

 ReactDOM . render (elemento,document.getElementById('root ')) ;
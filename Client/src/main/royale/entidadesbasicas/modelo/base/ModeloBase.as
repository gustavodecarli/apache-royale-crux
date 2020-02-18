package entidadesbasicas.modelo.base
{
	
	[Bindable]
	public class  ModeloBase
	{
		public var id : int;

		public function clone():ModeloBase{

			
			var modelo:ModeloBase = new ModeloBase();
			modelo.id = id;

			return modelo;
		}
    }   
}     
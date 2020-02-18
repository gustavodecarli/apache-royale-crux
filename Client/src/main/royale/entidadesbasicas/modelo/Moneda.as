/*
 * Copyright 2010 Swiz Framework Contributors
 *
 * Licensed under the Apache License, Version 2.0 (the "License"); you may not
 * use this file except in compliance with the License. You may obtain a copy of
 * the License. You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
 * License for the specific language governing permissions and limitations under
 * the License.
 */
package entidadesbasicas.modelo
{
	
	import entidadesbasicas.modelo.base.ModeloBase;

	[Bindable]
	[RemoteClass(alias="entidadesbasicas.modelo.Moneda")]
	public class Moneda extends ModeloBase
	{
		public var codigo : String;
		public var descripcion : String;
		
		
		public override function clone():Moneda{
			

			var moneda:Moneda = super.clone() as Moneda;
			moneda.codigo = codigo;
			moneda.descripcion = descripcion;

			return moneda;
		}
		
	}
}

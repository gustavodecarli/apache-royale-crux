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
package entidadesbasicas.controlador
{
	import org.apache.royale.jewel.Alert;
	import mx.rpc.events.ResultEvent;
	import org.apache.royale.crux.utils.services.ServiceHelper;
	import entidadesbasicas.servicios.SeleccionarService;
	import entidadesbasicas.modelo.base.ModeloBase;
	import mx.rpc.events.FaultEvent;
	import mx.rpc.remoting.RemoteObject;
	import mx.collections.ArrayCollection;
	import org.apache.royale.collections.ArrayList;

	
	
	/**
	 * @royalesuppresspublicvarwarning
	 */
	public class SeleccionarController
	{
		[Inject]
		public var userService : SeleccionarService;
		
		[Inject]
		/**
		 * Crux will automatically create any Bean for the built-in helper classes
		 * if one has not been defined.
		 */ 
		public var serviceHelper : ServiceHelper;
		
		[Bindable]
		public var currentModelo : ModeloBase;
		
		[Bindable]
		public var models : ArrayList;


		[PostConstruct]
		/**
		 * [PostConstruct] methods are invoked after all dependencies are injected.
		 * In this example, we set up a default user after the bean is created.
		 */ 
		public function createDefault() : void
		{
			trace('[PostConstruct] executing createDefaultUser in UserController');
			currentModelo = new ModeloBase();
		}
		
		
		[EventHandler( event="SeleccionarEvent.SELECCIONAR", properties="modelo" )]
		/**
		 * Perform a server request to save the user
		 */ 
		public function saveUser( modelo : ModeloBase ) : void
		{
			trace('[EventHandler] executing saveUser in UserController via EventHandler processing');
			serviceHelper.executeServiceCall( userService.ejecutar( modelo ), handleSaveUserResult , handleSaveUserFault);
		}
		
		/**
		 * Handle the server call result
		 */ 
		
		private function handleSaveUserResult( event : ResultEvent ) : void
		{
			models = event.result as ArrayList;
			// Show an Alert just to make it obvious that the save was successful.
			// Alert.show( 'User saved successfully! id:' + event.result, 'Success' );
		}
		

		private function handleSaveUserFault( event : FaultEvent ) : void
		{
			//modelo = event.result as ModeloBase;
			// Show an Alert just to make it obvious that the save was successful.


			trace(event.fault.faultDetail);
			// Alert.show( 'User saved errro ' + event, 'Error' );
		}
		
	}
}



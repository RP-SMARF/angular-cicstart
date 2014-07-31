/**
 * Tests sit right alongside the file they are testing, which is more intuitive
 * and portable than separating `src` and `test` directories. Additionally, the
 * build process will exclude all `.spec.js` files from the build
 * automatically.
 */
describe( 'VFS section', function() {

	beforeEach(
		module( 'cicstart-vfs' )
	);
	beforeEach(
		module( 'ipCookie' )
	);
	beforeEach(
		module( 'cicstart-vfs.service' )
	);
	describe('VfsCtrl', function(){
		var scope, ctrl,$httpBackend;



		beforeEach(inject(function(_$httpBackend_, $rootScope, $controller){

			$httpBackend = _$httpBackend_;
			$httpBackend.expectPOST(/http:\/\/localhost:8080\/cicstart\/api\/auth\/session\?*/,undefined, {'Content-Type': 'application/x-www-form-urlencoded;charset=utf-8',"Accept":"application/json, text/plain, */*"}).respond({session: "ca7a76fc-543d-4f70-a5bb-8e486e49f8ab"});
			$httpBackend.expectGET(/http:\/\/localhost:8080\/cicstart\/api\/*\/*\/*\/*\/\?path=\/|%2F/,undefined,{'CICSTART.session': 'ca7a76fc-543d-4f70-a5bb-8e486e49f8ab'}).respond({entries:[{"size":4096,"path":{"relationship":"omar-tool-test","href":"http://localhost:8080/cicstart/api/vfs/filesystem/2/read?path=/omar-tool"},"lastModified":"2013-09-06T15:22:38.000","dir":true},{"size":450,"path":{"relationship":"mysql.txt-test","href":"http://localhost:8080/cicstart/api/vfs/filesystem/2/read?path=/mysql.txt"},"lastModified":"2014-05-27T16:36:33.000","dir":false}], path: {"relationship":"/","href":"http://localhost:8080/cicstart/api/vfs/filesystem/2/ls?path=/"} });
			scope = $rootScope.$new();
			ctrl = $controller('VfsCtrl', {$scope: scope});
		}));

		it('should have a session to perform vfs function', function(){
			//console.log("cookie: "+ ipCookie('CICSTART_session'));
			//if(!(ipCookie))
			//{
			//	
			//}
			//else{
				$httpBackend.flush();
				expect(scope.sessionVal).toBe('ca7a76fc-543d-4f70-a5bb-8e486e49f8ab');
			//}
		});
		
		it('should get two entries for root path when doing vfs ls', function()
		{
			$httpBackend.flush();
			expect(scope.entries.length).toBe(2);
		});

	});

	it( 'should have a dummy test', inject( function() {
		expect( true ).toBeTruthy();
	}));
});


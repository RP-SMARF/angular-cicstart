'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */


describe('Sandbox', function(){


	describe('Home page view', function(){


		beforeEach(function(){
			browser.get('http://majumdar-08.sce.carleton.ca:8084/index.html');
		});
		
		it('should should show the sandbox home page with drag and drop', function(){
			var rows = element.all(by.repeater('r in [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]'));
			// var query = element(by.model('query'));

			expect(rows.count()).toBe(10);

			// query.sendKeys('nexus');
			// expect(phoneList.count()).toBe(1);

			// query.clear();
			// query.sendKeys('motorola');
			// expect(phoneList.count()).toBe(8);
		});

	});

	// describe('Phone list view', function(){


	// 	beforeEach(function(){
	// 		browser.get('http://localhost:8000/app/index.html');
	// 	});
		
	// 	it('should filter the phone list as user types into the search box', function(){
	// 		var phoneList = element.all(by.repeater('phone in phones'));
	// 		var query = element(by.model('query'));

	// 		expect(phoneList.count()).toBe(20);

	// 		query.sendKeys('nexus');
	// 		expect(phoneList.count()).toBe(1);

	// 		query.clear();
	// 		query.sendKeys('motorola');
	// 		expect(phoneList.count()).toBe(8);
	// 	});

	describe('vfs page view', function(){

		
		
		

		it('should go to vfs view on nav click', function(){
			//var driver = browser.driver;
			//browser.get('http://rpsmarf.ca:8001/index.html');
			//browser.driver.sleep(2000);
			var l;
				
			var el;
			var link = element.all(by.tagName('a')).then(function(elements){
				var e;
				for(var i=0; i<elements.length; i++)
				{	
					e = elements[i];
					e.getAttribute('ui-sref').then(function(att){
						if(att == 'vfs')
						{
							e.click();

							var divs = element.all(by.repeater('entry in entries'));
							expect(divs.count()).toEqual(2);
							//expect()
						}

					});
				}
			});

		});

		it('should expand and get sub entries for a folder type', function(){
			//cssSelector
			element.all(by.css('lnd-tree div.panel')).get(0).then(function(elem){
				var e;
				console.log(element);

				elem.element(by.tagName('a')).then(function(el){
					el.click();

					var button = elem.all(by.tagName('button'));
					console.log(button);
					expect(button.count()).toBe(1);
					expect(button.get(0).getText()).toBe('Expand');
					button.get(0).click();
					var subFiles = elem.all(by.repeater('entry in entry.nodes'));

					expect(subFiles.count()).toBe(2);
					browser.driver.sleep(2000);
					//expect(subFiles.get(0).get)

				});
				
			})
		});




	 });


});

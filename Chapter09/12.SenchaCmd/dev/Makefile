all: js ../build/navi.php
js:
	sencha compile \
		-cl=src/app.js,src/app,../ext4/src \
		page \
			-clo \
			-i index.html\
			-o ../build/index.html;
../build/navi.php: navi.php
	cp navi.php ../build;

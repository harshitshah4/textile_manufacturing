from setuptools import setup, find_packages

with open('requirements.txt') as f:
	install_requires = f.read().strip().split('\n')

# get version from __version__ variable in textile_manufacturing/__init__.py
from textile_manufacturing import __version__ as version

setup(
	name='textile_manufacturing',
	version=version,
	description='Dashboard to manage textile manufacturing Pipeline',
	author='Harshit and Anmol',
	author_email='anmol.sarda@somaiya.edu',
	packages=find_packages(),
	zip_safe=False,
	include_package_data=True,
	install_requires=install_requires
)

from setuptools import setup, find_packages

requires = [] # Let conda handle requires

setup(
    name="exbert",
    description="Vis",
    packages=find_packages(),
    author="IBM Research AI",
    include_package_data=True,
    install_requires=requires
)
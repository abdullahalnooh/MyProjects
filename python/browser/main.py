# this is little browser application in python 
# using PyQt5 module 
# To learn more about PyQt5 visit https://pypi.org/project/PyQt5/

import sys
from PyQt5.QtCore import *
from PyQt5.QtWidgets import *
from PyQt5.QtWebEngineWidgets import *

class MainWindow(QMainWindow):
    def __init__(self):
        super(MainWindow, self).__init__()
        self.browser = QWebEngineView()
        self.browser.setUrl(QUrl('http://google.com'))
        self.setCentralWidget(self.browser)
        self.showMaximized()

        # the navbar seciton
        navbar = QToolBar()
        self.addToolBar(navbar)

        #back button
        backbtn = QAction('back', self)
        backbtn.triggered.connect(self.browser.back)
        navbar.addAction(backbtn)

        #forward button
        forwardbtn = QAction('forward', self)
        forwardbtn.triggered.connect(self.browser.forward)
        navbar.addAction(forwardbtn)

        #Reload button 
        reloadbtn = QAction('reload', self)
        reloadbtn.triggered.connect(self.browser.reload)
        navbar.addAction(reloadbtn)
        
        #Home button
        homebtn = QAction('Home', self)
        homebtn.triggered.connect(self.navigatehome)
        navbar.addAction(homebtn)

        # setting the url bar 
        self.url_bar = QLineEdit()
        self.url_bar.returnPressed.connect(self.navigateurl)
        navbar.addWidget(self.url_bar)

        self.browser.urlChanged.connect(self.updateurl)

    # defining home button url
    def navigatehome(self):
        self.browser.setUrl(QUrl('http://google.com'))

    #defining the url bar 
    def navigateurl(self):
        url = self.url_bar.text()
        self.browser.setUrl(QUrl(url))

    # updating the url in the bar
    def updateurl(self, q):
        self.url_bar.setText(q.toString())

# setting applcation name 
app = QApplication(sys.argv)
QApplication.setApplicationName('Kweb')
windows = MainWindow()
app.exec_()
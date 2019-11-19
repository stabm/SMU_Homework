#!/usr/bin/env python
# coding: utf-8

#Imports
from bs4 import BeautifulSoup
from splinter import Browser
import datetime
import re
import pandas as pd 


#Constants
chromiumPath = r"C:\Users\marin\chromedriver.exe"

def scrapeMars():

    url = "https://mars.nasa.gov/news/"
    executable_path = {'executable_path': chromiumPath}
    browser = Browser('chrome', **executable_path, headless=False)
    browser.visit(url)


    # # Scraper num 1

    #Soupify
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')


    newsTitle = soup.find("div", {"class" : "content_title"})
    newsTitle


    titleLink = newsTitle.find("a")
    titleLink


    newsTitleText = titleLink.text
    newsTitleText


    link = titleLink["href"]
    link


    frontBit = "https://mars.nasa.gov"

    fullLink_news = frontBit + link
    fullLink_news

    # # Scraper num 2

    url = "https://www.jpl.nasa.gov/spaceimages/?search=&category=Mars"
    browser.visit(url)


    #Soupify
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')


    featImage = soup.find("article", {"class": "carousel_item"})
    featImage


    link = featImage["style"].split("(")[1].replace(");", "").replace("'", "")


    frontBit = "https://www.jpl.nasa.gov"

    fullLink_featImage = frontBit + link
    fullLink_featImage


    # # Scraper num 3

    url = "https://twitter.com/marswxreport?lang=en"
    browser.visit(url)


    #Soupify
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')


    tweet = soup.find('p', {"class": "tweet-text"})
    tweet


    weather = tweet.text
    weather


    # # Scraper num 4

    url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
    browser.visit(url)


    browser.find_by_css("a.itemLink h3")[0].click()


    #Soupify
    html = browser.html
    soup = BeautifulSoup(html, 'lxml')


    imageTitle = soup.find("h2", {"class" : "title"}).text
    imageTitle


    imageLink_panda = soup.find("img", {"class": "wide-image"})["src"]
    imageLink_panda


    frontBit = "https://astrogeology.usgs.gov"
    imageLink_panda1 = frontBit + imageLink_panda
    imageLink_panda1


    hemi_data = []

    for i in range(4):
        hemi_dict = {}
        
        url = "https://astrogeology.usgs.gov/search/results?q=hemisphere+enhanced&k1=target&v1=Mars"
        browser.visit(url)
        browser.find_by_css("a.itemLink h3")[i].click()
        
        #Soupify
        html = browser.html
        soup = BeautifulSoup(html, 'lxml')
        
        imageTitle = soup.find("h2", {"class" : "title"}).text
        imageLink_panda = soup.find("img", {"class": "wide-image"})["src"]
        
        frontBit = "https://astrogeology.usgs.gov"
        imageLink_panda1 = frontBit + imageLink_panda
        
        hemi_dict["title"] = imageTitle
        hemi_dict["link"] = imageLink_panda1
        
        hemi_data.append(hemi_dict)


    hemi_data


    list_dfs = pd.read_html("https://space-facts.com/mars/")


    len(list_dfs)


    marsFacts = list_dfs[0]
    marsFacts.columns = ["Name", "Measure"]
    marsFacts


    marsFactsHTML = marsFacts.to_html()
    marsFactsHTML


    browser.quit()


    print(newsTitleText)
    print(fullLink_news)


    print(fullLink_featImage)


    print(weather)


    print(hemi_data)


    print(marsFactsHTML)

    post = {
        'newsTitle': newsTitleText,
        'newsLink': fullLink_news,
        'featImageLink': fullLink_featImage,
        'weatherInfo': weather,
        'hemisphereInfo': hemi_data,
        'marsFacts': marsFactsHTML,
        'last_updated': datetime.datetime.utcnow()
    }

    return post

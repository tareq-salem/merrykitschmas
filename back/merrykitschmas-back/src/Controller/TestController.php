<?php

namespace App\Controller;

use App\Entity\Article;
use App\Repository\ArticleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class TestController extends AbstractController
{
    /**
     * @Route("/test", name="test")
     */
    public function index()
    {
        return $this->render('test/index.html.twig', [
            'controller_name' => 'TestController',
        ]);
    }

    /**
     * @Route("/lucky/number/{max}", name="lucky_number", requirements={"max"="[0-9]+"}, defaults={"max"=100})
     *
     */
    public function numberAction($max)
    {
        // génération d'un nombre aléatoire
        $number = mt_rand(0, $max);
        //ici on va chercher le template et on lui transmet la variable
        return $this->render('test/number.html.twig', [
            // pour fournir des variables au template
            // a gauche, le nom qui sera utilisé dans le template
            // a droite, la valeur
            'number' => $number
        ]);
    }

//,
//*      defaults={"_locale"="fr"},
//*      requirements={
 //   *          "_locale": "en|fr",
  //   *          "year": "/d+"
   // *      }
    // *

    /**
     * @Route("/blog/{_locale}/{year}/{title}", name="myblog",
     *     defaults={"_locale"="fr"},
     *     requirements={
     *          "_locale": "en|fr",
     *          "year": "\d{4,}",
     *          "title": "polb"
     * }
     * )
     */
    public function blog($_locale, $year, $title)
    {

        return $this->render('test/blog.html.twig', [
            "title" => $title,
            "year" => $year,
            "_locale" => $_locale

        ]);

    }

    /**
     * @Route("/list", name="myList",
     *
     * )
     */
    public function showListArticle()
    {

       $articles = $this->getDoctrine()->getRepository(Article::class)->findAll();

       dump($articles);

        return $this->render('test/list.html.twig', [


            "articles" => $articles
        ]);

    }
    /**
     * @Route("/article/{id}", name="myArticle",
     *
     * )
     */
    public function showArticle($id)
    {

        $article = $this->getDoctrine()->getRepository(Article::class)->find($id);

        dump($article);

        return $this->render('test/oneArticle.html.twig', [


            "article" => $article
        ]);

    }


}

<?php
namespace Statamic\Addons\WordFilter;

use Statamic\Extend\Filter;
use Statamic\API\Term;
use Statamic\API\Helper;

class WordFilterFilter extends Filter
{
  /**
   * Filter a collection based on entries' arrays of taxonomy IDs
   *
   * @return \Illuminate\Support\Collection
   */
  public function filter()
  {
    return $this->collection->filter(function ($entry)
    {
      $keywords = $this->get('keywords');
      if( !empty($keywords) ){
        return $this->collection->filter(function ($entry) {
            return str_contains($entry->get('title'), $keywords );
        });
      }
    });
  }
}
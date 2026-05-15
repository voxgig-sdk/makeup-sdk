<?php
declare(strict_types=1);

// Makeup SDK utility: make_context

require_once __DIR__ . '/../core/Context.php';

class MakeupMakeContext
{
    public static function call(array $ctxmap, ?MakeupContext $basectx): MakeupContext
    {
        return new MakeupContext($ctxmap, $basectx);
    }
}
